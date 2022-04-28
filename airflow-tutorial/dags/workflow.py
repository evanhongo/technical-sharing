from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python_operator import PythonOperator, BranchPythonOperator
from airflow.operators.dummy_operator import DummyOperator

from custom_operator.greet_operator import GreetOperator
from settings import main as settings
from tasks.main import get_whitelist_to_mongo_task


default_args = {
    "owner": "Evan Wu",
    "depends_on_past": True, # 每一次執行的 Task 是否會依賴於上次執行的 Task，如果是 False 的話，代表上次的 Task 如果執行失敗，這次的 Task 就不會繼續執行
    "start_date": datetime(2021, 8, 8, 17, 30), # Task 從哪個日期後開始可以被 Scheduler 排入排程
    "email": ["airflow@example.com"], # 如果 Task 執行失敗的話，要寄信給哪些人的 email
    "email_on_failure": False, # 如果 Task 執行失敗的話，是否寄信
    "email_on_retry": False, # 如果 Task 重試的話，是否寄信
    "retries": 1, # 最多重試的次數
    "retry_delay": timedelta(minutes=1), # 每次重試中間的間隔
    # "end_date": datetime(2020, 2, 29), # Task 從哪個日期後，開始不被 Scheduler 放入排程
    # "execution_timeout": timedelta(seconds=300), # Task 執行時間的上限
    # "on_failure_callback": some_function, # Task 執行失敗時，呼叫的 function
    # "on_success_callback": some_other_function, # Task 執行成功時，呼叫的 function
    # "on_retry_callback": another_function, # Task 重試時，呼叫的 function
}

def do_something(**context):
    data = "OK"
    return data    

def show_time(**context):
    # xcom default key => return_value
    msg = context["task_instance"].xcom_pull(task_ids="greet", key="time")
    print(f"greeting time: {msg}")

with DAG("workflow", default_args=default_args, schedule_interval=timedelta(days=1)) as dag:
    do_something = PythonOperator(
        task_id="do_something",
        python_callable=do_something,
        provide_context=True
    )

    branch = BranchPythonOperator(
        task_id="branch",
        python_callable=lambda **context: "greet" if context["task_instance"].xcom_pull(task_ids="do_something") == "OK" else "do_nothing",
        provide_context=True
    )
     
    greet = GreetOperator(
        task_id="greet",
        name="jojo",
    )
    
    show_time = PythonOperator(
        task_id="show_time",
        python_callable=show_time,
        provide_context=True,
    )
    
    do_nothing = DummyOperator(task_id="do_nothing")
    
    whitelist_to_mongo_task = get_whitelist_to_mongo_task(settings=settings)
    
    do_something >> branch 
    branch >> [greet, do_nothing] 
    greet >> show_time >> whitelist_to_mongo_task