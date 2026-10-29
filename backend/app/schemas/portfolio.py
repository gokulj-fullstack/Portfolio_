from typing import List, Optional
from pydantic import BaseModel

class EducationInfo(BaseModel):
    degree: str
    major: str
    institution: str
    university: str
    graduationYear: int
    description: str
    
    cgpa: Optional[str] = None

class ProfileResponse(BaseModel):
    name: str
    role: str
    headline: str
    subheadline: str
    bio: str
    location: str
    email: str
    phone: Optional[str] = None
    resumeUrl: Optional[str] = None
    github: str
    linkedin: str
    education: EducationInfo
    professionalGoal: str

class SkillItem(BaseModel):
    name: str
    level: Optional[str] = None
    tag: Optional[str] = None
    desc: Optional[str] = None
    category: Optional[str] = None
    type: Optional[str] = None

class SkillsResponse(BaseModel):
    programmingLanguages: List[SkillItem]
    frontend: List[SkillItem]
    backend: List[SkillItem]
    databases: List[SkillItem]
    toolsAndPlatforms: List[SkillItem]

class ProjectItem(BaseModel):
    id: str
    title: str
    tagline: str
    description: str
    originalTechnologies: List[str]
    primaryTechTags: List[str]
    liveDemo: Optional[str] = None
    hasLiveDemo: bool
    image: str
    features: List[str]

class ServiceItem(BaseModel):
    id: str
    title: str
    summary: str
    tags: List[str]
    relevantProject: str

class ExperienceItem(BaseModel):
    type: str
    title: str
    organization: str
    location: str
    period: str
    summary: str
    skills: List[str]
