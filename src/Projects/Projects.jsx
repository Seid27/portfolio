export default function Projects() {
    return (
        <>
            <section className="projects hero vh-100 d-flex align-items-center">
                
                <div className="container-fluid">
                            
                    <div className="container">
                        <div className="row">
                        <div id="projects-h1" >
                                <h1>Projects</h1>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col">
                                <div className="card">
                                    <img src="src/assets/goals.jpg" className="img-fluid"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Account-a-Goals</h5>
                                        <p className="card-text">A hub for personal growth, connection, and goal achievement.</p>
                                        <a href="https://account-a-goals.fly.dev " className="btn btn-dark">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="src/assets/calculator.jpg" className="img-fluid"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Server Side Calculator</h5>
                                        <p className="card-text">Online calculator.     

                                        </p>
                                        <a href="https://seid-calc-app.fly.dev" className="btn btn-dark">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="src/assets/gallery.jpg" className="img-fluid"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">A place to save your most memorable pictures</p>
                                        <a href="#" className="btn btn-dark">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}