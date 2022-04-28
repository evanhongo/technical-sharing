from airflow.contrib.hooks.ssh_hook import SSHHook

ssh_hook = SSHHook(
    remote_host='192.168.6.75',
    username='yeee',
    password='yeee',
    port='22',
)
