import React,{Component} from "react";
import './style.css';
export default class Content extends Component{
    render(){
      return<div class="table">
         <h1>Student's Details</h1>
        <table class="tab">
           <tr>
                <th>S.No</th>
                <th>Student Name</th>
                <th>Department</th>
                <th>Reg No</th>
                <th>City</th>
            </tr>
            <tr>
                <td>01</td>
                <td>Lydia E</td>
                <td>ECE</td>
                <td>1234</td>
                <td>Kallakurichi</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Lavanya B</td>
                <td>CSE</td>
                <td>1224</td>
                <td>Trichy</td>
            </tr>
            <tr>
                <td>03</td>
                <td>Kavibharathi M</td>
                <td>IT</td>
                <td>1232</td>
                <td>Pollachi</td>
            </tr>
            <tr>
                <td>04</td>
                <td>Oviya R</td>
                <td>AIML</td>
                <td>1236</td>
                <td>Namakkal</td>
            </tr>
        </table>
          <form  class="tab">
            <h1>Login</h1>
            <label>REGISTER NO</label>
            <input type="text"class="text1"></input><br></br>
            <label>DEPARTMENT</label>
            <input type="text"class="text2"></input><br></br>
            <button type="submit">Submit</button>
            <button type="submit">Cancel</button>
         </form>
       </div>

    }
}