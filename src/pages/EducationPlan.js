import React from 'react';
import { Link } from 'react-router-dom';

class EducationPlan extends React.Component {
    render() {
        return (
            <main>
                <h1>Education Plan</h1>
                <table className="course_table">
                    <caption>First Semester</caption>
                    <tr>
                        <th>Course Number</th>
                        <th>Title</th>
                        <th>Contact Hours</th>
                        <th>Credits</th>
                    </tr>
                    <tr>
                        <td>ACA 111</td>
                        <td>College Student Success</td>
                        <td>1</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CTI 110</td>
                        <td>Web, Programming, and Database, Foundation</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CTS 115</td>
                        <td>Information Systems Business Concepts</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>ENG 111</td>
                        <td>Writing and Inquiry</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>WEB 111</td>
                        <td>Introduction to Web Graphics</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                </table>
                <table className="course_table">
                <caption>Second Semester</caption>
                    <tr>
                        <th>Course Number</th>
                        <th>Title</th>
                        <th>Contact Hours</th>
                        <th>Credits</th>
                    </tr>
                </table>
                
            </main>
        );
    }
}

export default EducationPlan;