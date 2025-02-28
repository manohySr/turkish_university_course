##Here are the schemas for the database
#It is just a pseudocode which happens to be python

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
