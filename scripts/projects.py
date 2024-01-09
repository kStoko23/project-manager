import random
from datetime import datetime, timedelta

# Function to generate a random date in January 2020
def random_date():
    start_date = datetime(2020, 1, 1)
    end_date = datetime(2020, 1, 31)

    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    random_date = start_date + timedelta(days=random_number_of_days)

    return random_date.strftime("%Y-%m-%d")

# Function to generate a single SQL query for a given project_id
def generate_sql(project_id):
    project_name = "Project"
    description = "Project Description"
    status = random.choice(["New", "Ongoing", "Completed", "Suspended"])  # Random status
    project_manager_id = random.randint(3,4)  # Random project_manager_id between 1 and 10
    start_date = random_date()  # Random start_date in January 2020
    end_date = random_date()  # Random end_date in January 2020

    return f"INSERT INTO projects (id, project_name, description, start_date, end_date, project_manager_id, status) VALUES ({project_id}, '{project_name}', '{description}', '{start_date}', '{end_date}', {project_manager_id}, '{status}');"

# Generate SQL queries for each project_id
project_ids = list(range(101, 201))  # Change this to match your actual project_ids
sql_queries = [generate_sql(project_id) for project_id in project_ids]

# Combine all queries into one multi-line string
complete_sql_script = "\n".join(sql_queries)
print(complete_sql_script)