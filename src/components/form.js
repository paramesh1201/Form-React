import FormField from "./formfield"
import SelectionField from "./SelectionField"
import './form.css';
export default function form(){
  return(
    <div className="one">
         <FormField lableName="First Name" placeHol = "First Name" req = "First Name" />
         <FormField lableName="Middle Name" placeHol = "Middle Name" req = "Middle Name" />
         <FormField lableName="Last Name" placeHol = "Last Name" req = "Last Name" />
         <FormField lableName="Birth Date" placeHol = "DOB" req = "Date" type="date" />
         <FormField lableName="E-Mail" placeHol = "email" req = "Email" />
         <FormField lableName="Phone Number" placeHol = "phone number" req = "Phone Number" />
         <SelectionField lableName="Select Gender" options={["Select","Male","Female","Others"]}/>
         <FormField lableName="Start Time" placeHol = '' req = "Start time" type="time" />
         <FormField lableName="End Time" placeHol = '' req = "End time" type="time" />
         <FormField lableName="Job Position" placeHol = 'job position' req = "Job Position"  />
         <SelectionField lableName="Select Teams" options={["A","B","C"]}/>
         <SelectionField lableName="Designations" options={["Select","Student","Staff","Administrator", "Office-Worker"]}/>
         <FormField lableName="Billable Hours" placeHol = 'billable hours' req = "Billable Hours"  />
        
        
         
        

    </div>
  )
}