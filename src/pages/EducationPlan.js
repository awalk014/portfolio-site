import React from 'react';
import { Link } from 'react-router-dom';

class EducationPlan extends React.Component {
    render() {
        return (
            <main>
                <h1>Software Development AAS</h1>
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
                        <td>1</td>
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
                    <tr>
                        <td>CSC 134</td>
                        <td>C++ Programming</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CSC 151</td>
                        <td>Java Programming</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CTS 120</td>
                        <td>Hardware/Software Support</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>ENG 112</td>
                        <td>Writing and Research in the Disciplines</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                </table>
                <table className="course_table">
                    <caption>Third Semester</caption>
                    <tr>
                        <th>Course Number</th>
                        <th>Title</th>
                        <th>Contact Hours</th>
                        <th>Credits</th>
                    </tr>
                    <tr>
                        <td>CSC 121</td>
                        <td>Python Programming</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CTI 120</td>
                        <td>Network and Security Foundation</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CTS 285</td>
                        <td>Systems Analysis & Design</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </table>
                <table className="course_table">
                    <caption>Fourth Semester</caption>
                    <tr>
                        <th>Course Number</th>
                        <th>Title</th>
                        <th>Contact Hours</th>
                        <th>Credits</th>
                    </tr>
                    <tr>
                        <td>CSC 251</td>
                        <td>Advanced Java Programming</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>DBA 110</td>
                        <td>Database Programming</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>WEB 115</td>
                        <td>Web Markup and Scripting</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>WEB 182</td>
                        <td>PHP Programming</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                </table>
                <table className="course_table">
                    <caption>Fifth Semester</caption>
                    <tr>
                        <th>Course Number</th>
                        <th>Title</th>
                        <th>Contact Hours</th>
                        <th>Credits</th>
                    </tr>
                    <tr>
                        <td>CSC 227</td>
                        <td>Cloud Application Development</td>
                        <td>4</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>CSC 289</td>
                        <td>Programming Capstone Project</td>
                        <td>5</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>WEB 151</td>
                        <td>Mobile Application Development</td>
                        <td>3</td>
                        <td>3</td>
                    </tr>
                </table>
            </main>
        );
    }
}

export default EducationPlan;