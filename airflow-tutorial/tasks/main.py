from airflow.contrib.operators.ssh_operator import SSHOperator

def get_whitelist_to_mongo_task(settings):
    task = SSHOperator(
        ssh_hook=settings.ssh_hook,
        task_id='whitelist_to_mongo',
        command='docker restart whitelist-to-mongo -v /home/misuer/mapping ./asset'
    )
    return task