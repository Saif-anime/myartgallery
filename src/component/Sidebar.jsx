import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li class="nav-item">
                    <Link class="nav-link " to="/">
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/Banner">
                        <i class="bi bi-bag"></i>
                            <span>Banner Content Management</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/User">
                        <i class="bi bi-bag"></i>
                            <span>User Content Management</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/Order">
                        <i class="bi bi-bag"></i>
                            <span>Order Content Management</span>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link " to="/Product">
                        <i class="bi bi-bag"></i>
                            <span>Product Content Management</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/Category">
                        <i class="bi bi-tag"></i>
                            <span>Category Content Management</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/SubCategory">
                        <i class="bi bi-tag"></i>
                            <span>Sub Category Content Management</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="/Fabric">
                            <i class="bi bi-grid"></i>
                            <span>Fabric Content Management</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="/Colors">
                        <i class="bi bi-palette"></i>
                            <span>Color Content Management</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="/Occasion">
                            <i class="bi bi-grid"></i>
                            <span>Occasion Content Management</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/Offer">
                            <i class="bi bi-grid"></i>
                            <span>Offer Content Management</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="/Discount">
                            <i class="bi bi-grid"></i>
                            <span>Discount Content Management</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/Uniform">
                            <i class="bi bi-grid"></i>
                            <span>Uniform type Content Management</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="/Blouse">
                            <i class="bi bi-grid"></i>
                            <span>Blouse type Content Management</span>
                        </a>
                    </li>

                    

                    {/* <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Product Management Content</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="components-alerts.html">
                                    <i class="bi bi-circle"></i><span>Product </span>
                                </a>
                            </li>
                            <li>
                                <a href="components-accordion.html">
                                    <i class="bi bi-circle"></i><span>Accordion</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-badges.html">
                                    <i class="bi bi-circle"></i><span>Badges</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-breadcrumbs.html">
                                    <i class="bi bi-circle"></i><span>Breadcrumbs</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-buttons.html">
                                    <i class="bi bi-circle"></i><span>Buttons</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-cards.html">
                                    <i class="bi bi-circle"></i><span>Cards</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-carousel.html">
                                    <i class="bi bi-circle"></i><span>Carousel</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-list-group.html">
                                    <i class="bi bi-circle"></i><span>List group</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-modal.html">
                                    <i class="bi bi-circle"></i><span>Modal</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-tabs.html">
                                    <i class="bi bi-circle"></i><span>Tabs</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-pagination.html">
                                    <i class="bi bi-circle"></i><span>Pagination</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-progress.html">
                                    <i class="bi bi-circle"></i><span>Progress</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-spinners.html">
                                    <i class="bi bi-circle"></i><span>Spinners</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-tooltips.html">
                                    <i class="bi bi-circle"></i><span>Tooltips</span>
                                </a>
                            </li>
                        </ul>
                    </li> */}

                    {/* <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="forms-elements.html">
                                    <i class="bi bi-circle"></i><span>Form Elements</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-layouts.html">
                                    <i class="bi bi-circle"></i><span>Form Layouts</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-editors.html">
                                    <i class="bi bi-circle"></i><span>Form Editors</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <i class="bi bi-circle"></i><span>Form Validation</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="tables-general.html">
                                    <i class="bi bi-circle"></i><span>General Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i class="bi bi-circle"></i><span>Data Tables</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="charts-chartjs.html">
                                    <i class="bi bi-circle"></i><span>Chart.js</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-apexcharts.html">
                                    <i class="bi bi-circle"></i><span>ApexCharts</span>
                                </a>
                            </li>
                            <li>
                                <a href="charts-echarts.html">
                                    <i class="bi bi-circle"></i><span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                     */}

                    <li class="nav-heading">Pages</li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                            <i class="bi bi-person"></i>
                            <span>Profile</span>
                        </a>
                    </li>

                

                 
                  
           
                  

                </ul>

            </aside>


        </>
    )
}

export default Sidebar