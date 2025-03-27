import React from 'react';
import { Link } from 'react-router-dom';

class CourseDescription extends React.Component {
    render() {
        return (
            <main>
                <table class="course_table">
                    <caption>Course Description</caption>
                    <tr>
                        <th>Course Number</th>
                        <th>Course Name</th>
                    </tr>
                    <tr>
                        <td>ACA 111</td>
                        <td><Link to="/courseinfo#ACA111">College Student Success</Link></td>
                    </tr>
                    <tr>
                        <td>CTI 110</td>
                        <td><Link to="/courseinfo#CTI110">Web, Programming, and Database, Foundation</Link></td>
                    </tr>
                    <tr>
                        <td>CTS 115</td>
                        <td><Link to="/courseinfo#CTS115">Information Systems Business Concepts</Link></td>
                    </tr>
                    <tr>
                        <td>ENG 111</td>
                        <td><Link to="/courseinfo#ENG111">Writing and Inquiry</Link></td>
                    </tr>
                    <tr>
                        <td>WEB 111</td>
                        <td><Link to="/courseinfo#WEB111">Introduction to Web Graphics</Link></td>
                    </tr>
                    <tr>
                        <td>CSC 134</td>
                        <td><Link to="/courseinfo#CSC134">C++ Programming</Link></td>
                    </tr>
                    <tr>
                        <td>CSC 151</td>
                        <td><Link to="/courseinfo#CSC151">JAVA Programming</Link></td>
                    </tr>
                    <tr>
                        <td>CTS 120</td>
                        <td><Link to="/courseinfo#CTS120">Hardware/Software Support</Link></td>
                    </tr>
                    <tr>
                        <td>ENG 112</td>
                        <td><Link to="/courseinfo#ENG112">Writing and Research in the Disciplines</Link></td>
                    </tr>
                    <tr>
                        <td>CSC 121</td>
                        <td><Link to="/courseinfo#CSC121">Python Programming</Link></td>
                    </tr>
                    <tr>
                        <td>CTI 120</td>
                        <td><Link to="/courseinfo#CTI120">Network and Security Foundation</Link></td>
                    </tr>
                    <tr>
                        <td>CTS 285</td>
                        <td><Link to="/courseinfo#CTS285">Systems Analysis & Design</Link></td>
                    </tr>
                    <tr>
                        <td>CSC 251</td>
                        <td><Link to="/courseinfo#CSC251">Advanced JAVA Programming</Link></td>
                    </tr>
                    <tr>
                        <td>DBA 120</td>
                        <td><Link to="/courseinfo#DBA120">Database Programming I</Link></td>
                    </tr>
                    <tr>
                        <td>WEB 115</td>
                        <td><Link to="/courseinfo#WEB115">Web Markup and Scripting</Link></td>
                    </tr>
                    <tr>
                        <td>WEB 182</td>
                        <td><Link to="/courseinfo#WEB182">PHP Programming</Link></td>
                    </tr>
                    <tr>
                        <td>CSC 227</td>
                        <td><Link to="/courseinfo#CSC227">Cloud Application Development</Link></td>
                    </tr>
                    <tr>
                        <td>CSC 289</td>
                        <td><Link to="/courseinfo#CSC289">Programming Capstone Project</Link></td>
                    </tr>
                    <tr>
                        <td>WEB 151</td>
                        <td><Link to="/courseinfo#WEB151">Mobile Application Development I</Link></td>
                    </tr>
                    <tr>
                        <td>NOS 120</td>
                        <td><Link to="/courseinfo#NOS120">Linux/UNIX Single User</Link></td>
                    </tr>
                </table>
            </main>
        );
    }
}

export default CourseDescription;