import React from 'react';
import './App.css';
  
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <li><a href="#schools">Schools</a></li>
                    <li><a href="#majors">Majors</a></li>
                    <li><a href="#students">Students</a></li>
                    <li><a href='#professors'>Professors</a></li>
                </ul>
  
                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
  
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Find Your Ideal School with Collegepedia!
                        </h1>
                        <p class="text-small">
                        Collegepedia helps aspiring college students make the best university selection based
                        on their prospective majors and interests.  Students will be able to input their schools
                        of interest and proceed to filter by major.  Students attending schools will be able to
                        rate and write reviews on the major of choice, departments, dormitories, clubs,
                        faculty/staff/professor, classes and overall experience of the University of choice.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Sort Your Search!
                        </h1>
                        <p class="text-small">
                            Sort your search by desired school, major, location, interests or particular
                            University Services.  Collegepedia provides an open forum of free speech
                            surrounding curriculum, greek life, housing, tuition, and more.
                        </p>
                    </div>
                </div>
            </section>
           
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default App