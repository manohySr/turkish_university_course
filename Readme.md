## The Goal is to create an application which will give you a list of university-department from your course query

```sql
Example:
Here is the intuition
  1- just imaging for now that we have an input
  2- our user put a course name in the input
  3- we will have a list of university and the department related to that course (of course if there is that course in our list of university-department)
```

## Here are the schemas for the database
#### It is just a pseudocode which happens to be in python xD

```python
class UniversityModel(BaseModel):
  id: PyObjectId = Field(default_factory=PyObjectId, alias="\_id")
  name: str
  short_name: Optional[str] = None
  website: str
  location: str
  type: str

class DepartmentModel(BaseModel):
  id: PyObjectId = Field(default_factory=PyObjectId, alias="\_id")
  university_id: PyObjectId
  name: str
  website: Optional[str] = None

class CourseModel(BaseModel):
  id: PyObjectId = Field(default_factory=PyObjectId, alias="\_id")
  department_id: PyObjectId
  university_id: PyObjectId
  name: str
  code: str
  degree_level: str
  language: str
  duration: str
  ects: int
  tuition_fee: Optional[str] = None
  link: Optional[str] = None
```

## Excpected design
#### The data here is just for demonstration purpose
![image](https://github.com/user-attachments/assets/5f58ad72-248d-4489-9ad3-456678fbc6af)
![image](https://github.com/user-attachments/assets/20b07d12-76ce-46df-af02-d13f763915fd)


