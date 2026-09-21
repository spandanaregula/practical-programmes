class Student40 { String name,course; Student40(String name,String course){this.name=name;this.course=course;} String describe(){return name+" studies "+course+".";} }
public class Ex40_ClassesObjects { public static void main(String[] args){System.out.println(new Student40("Leo","Design").describe());} }
