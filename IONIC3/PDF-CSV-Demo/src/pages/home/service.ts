export class Service{

employee:any ={
    "Employees" : [
    {
    "userId":"rirani",
    "jobTitleName":"Developer",
    "firstName":"Romin",
    "lastName":"Irani",
    "preferredFullName":"Romin Irani",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":"408-1234567",
    "emailAddress":"romin.k.irani@gmail.com"
    },
    {
    "userId":"nirani",
    "jobTitleName":"Developer",
    "firstName":"Neil",
    "lastName":"Irani",
    "preferredFullName":"Neil Irani",
    "employeeCode":"E2",
    "region":"CA",
    "phoneNumber":"408-1111111",
    "emailAddress":"neilrirani@gmail.com"
    },
    {
    "userId":"thanks",
    "jobTitleName":"Program Directory",
    "firstName":"Tom",
    "lastName":"Hanks",
    "preferredFullName":"Tom Hanks",
    "employeeCode":"E3",
    "region":"CA",
    "phoneNumber":"408-2222222",
    "emailAddress":"tomhanks@gmail.com"
    },
    {
        "userId":"RWX14",
        "jobTitleName":"Software Developer",
        "firstName":"Md",
        "lastName":"Noorshid",
        "preferredFullName":"Md Noorshid",
        "employeeCode":"RWX14",
        "region":"HSR",
        "phoneNumber":"8431250146",
        "emailAddress":"mdnoorshid254@gmail.com"
        },
        {
            "userId":"RWX16",
            "jobTitleName":"UI Developer",
            "firstName":"Krishna",
            "lastName":"Deo",
            "preferredFullName":"Krishna Deo",
            "employeeCode":"RWX16",
            "region":"HSR",
            "phoneNumber":"44542798",
            "emailAddress":"krishna@gmail.com"
            }
    ]}

    /** 
     * Method to get employee data;
    */
    public getEmployeeData(){
        console.log(".inside getEmployeeData method.......");
        return this.employee;
    }



}