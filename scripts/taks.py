import random

def generate_sql(project_id):
    task_name = "Task"
    description = "Task Description"
    status = random.choice(["New", "Ongoing", "Completed", "Suspended"])  
    priority = random.randint(1, 10)  
    due_day = random.randint(1, 28)  
    due_date = f"2020-01-{due_day}"  
    return f"INSERT INTO tasks (task_name, description, status, priority, due_date, project_id) VALUES ('{task_name}', '{description}', '{status}', {priority}, '{due_date}', {project_id});"

project_ids = list(range(12, 43)) + [6, 8]
sql_queries_variable_priority = [generate_sql(project_id) for project_id in project_ids]
sql_queries_variable_priority += [generate_sql(project_id) for project_id in project_ids]
sql_queries_variable_priority += [generate_sql(project_id) for project_id in project_ids]

complete_sql_script = "\n".join(sql_queries_variable_priority)
print(complete_sql_script)
