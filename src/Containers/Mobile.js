import React from 'react'

function Mobile() {
    return (
        <div style={{ marginRight: "4px", marginLeft: "4px" ,marginTop:"4px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "10%" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </div>
                <div class="search">
                    <span style={{padding:"5px"}} class="fa fa-search"></span>
                    <input style={{padding:"20px"}}placeholder="Search by party name"></input>
                </div>

                <div style={{ color:"blue",width: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div style={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ color:"#fff",alignItems: "center", justifyContent: "center", display: "flex", borderRadius: "50%", width: "25px", height: '25px', backgroundColor: "green", fontSize: "12px" }}>AA</div>
                </div>
            </div>
            <div style={{ color:"white", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",backgroundColor:"#4169E1" }}>
                <div>Aircon Enterprises , Dwaarka</div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "50%" }}>
                        <div>Outstandings</div>
                        <div><span>&#x20b9;</span>2,56,678</div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div>Overdue</div>
                        <div><span>&#x20b9;</span>1,50,000</div>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ width: "10%",display: "flex", justifyContent: "center", alignItems: "center"  }}>
                            <i style={{ color: "yellow" }} class='fas fa-lightbulb '></i>
                        </div>
                        <div style={{ width: "90%" }}>
                            Push for orders as sales have dropped by 30% by last 90 days compared to 2021.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div   style={{ color:"blue",display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={'shadow-2'} style={{margin:"3px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid 	#888888", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px", width: "33.3%" }}>
                        <div style={{ alignItems: "center" }}><i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div>Call</div>

                    </div>
                    <div className={'shadow-2'} style={{ margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid 	#888888", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px", width: "33.3%" }}>
                        <div style={{ alignItems: "center",color:"green" }}><i class="fa-brands fa-whatsapp"></i>
                        </div>
                        Message

                    </div>

                    <div className={'shadow-2'} style={{color:"blue",margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid #888888", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px", width: "33.3%" }}>
                    <div><i class="fa-sharp fa-solid fa-file-contract"></i></div>
                        <div>Statement</div>
                        </div>
                </div>
            </div>
            <div className={'shadow-2'} style={{border: "1px solid #888888", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ width: "30%" ,display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <i style={{color:"blue"}}class="fas fa-chalkboard-teacher"></i>
                        </div>
                        <div style={{ width: "70%",color:"#606060" }}>
                            Record interation with retailer here to auto-generate daily report
                        </div>
                    </div>
                    
                    <div style={{color:"blue",display: "flex", justifyContent: "center", alignItems: "center",flexWrap:"wrap"}}>
                        <div style={{margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid blue", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",width:"25%"}}>
                            <div><i class="fa-sharp fa-solid fa-plus"></i></div>
                            <div style={{height:"55px",textAlign:"center"}}>Create<br></br>Order</div>
                        </div>

                        <div style={{margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid blue", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",width:"25%"}}>
                            <div><i class="fa-solid fa-file-signature"></i></div>
                            <div style={{height:"55px",textAlign:"center"}}>Promise<br></br> To Order</div>
                        </div>

                        <div style={{margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid blue", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",width:"25%"}}>
                            <div><i class="fa-solid fa-wallet"></i></div>
                            <div style={{height:"55px",textAlign:"center"}}>  PDC<br></br>Collected</div>
                        </div>
                        <div style={{margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid blue", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",width:"25%"}}>
                            <div><i class="fa-solid fa-wallet"></i></div>
                            <div style={{height:"55px",textAlign:"center"}}>Promise<br></br>To Pay</div>
                        </div>

                        <div style={{margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid blue", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",width:"25%"}}>
                            <div><i class="fa-solid fa-wallet"></i></div>
                            <div style={{height:"55px",textAlign:"center"}}>Cash<br></br>Collected</div>
                        </div>

                        <div style={{margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "1px solid blue", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px",width:"25%"}}>
                            <div><i class="fa-solid fa-wallet"></i></div>
                            <div style={{height:"55px",textAlign:"center"}}><br></br>Visit</div>
                        </div>

                    </div>

                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        
                    </div> */}
                    

                    
                </div>
                <div className={'shadow-2'} style={{ border: "1px solid #888888", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px" }}>
                    <div style={{fontWeight:"bold"}}>Invoices for Payment</div>
                    
                    <div style={{marginTop:"10px",padding:"0.5rem"}}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"0.5rem" }}>
                            <div style={{width:"20%" ,display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{fontWeight:"bold",backgroundColor:"lightgrey",border: "1px ", borderRadius: "12px",fontSize:"12px",padding:"15px",width:"60px"}}>
                            <div style={{fontSize:"25px"}}>25</div>
                            <div>NOV</div>
                            </div>
                            </div>
                            <div style={{width:"80%",paddingLeft:"10px"}}>
                                <div style={{display:"flex",width:"100%",justifyContent: "space-between"}}>
                                    <div style={{width:"30%",fontWeight:"bold",}}><span>&#x20b9;</span>12,800</div>
                                    <div style={{width:"70%",color:"#008B8B",fontWeight:"bold"}}><span>&#x20b9;</span>850 Cashback</div>
                                </div>
                                <div style={{color:"#606060"}}>Invoice ID:345674323456</div>
                                <div style={{color:"#606060"}}>Cashback is valid for 30 days</div>
                            </div>
                        </div>
                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"0.5rem" }}>
                            
                        <div style={{backgroundColor:"lightgrey",border: "1px ", borderRadius: "12px", padding: "1rem", marginTop: "30px", marginBottom: "3px" ,margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  width:"20%"}}>
                            
                            <div>25</div>
                            <div>NOV</div>
                        </div>
                        <div style={{ display: "flex" ,width:"80%"}}>
                    <div style={{ width: "50%" }}>
                        <div>Rs 12,800</div>
                    </div>
                    <div style={{ width: "50%",color:"#20B2AA	" }}>
                        <div>Rs 850 Cashback</div>
                    </div>
                </div>
                <div>
                <div>Invoice ID:345674323456</div>
                    <div>Cashback is valid for 30 days</div>
                    </div>
                    </div> */}

<div style={{ display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"0.5rem" }}>
                            <div style={{width:"20%" ,display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{fontWeight:"bold",backgroundColor:"lightgrey",border: "1px ", borderRadius: "12px",fontSize:"12px",padding:"15px",width:"60px"}}>
                            <div style={{fontSize:"25px"}}>25</div>
                            <div>NOV</div>
                            </div>
                            </div>
                            <div style={{width:"80%", paddingLeft:"10px"}}>
                                <div style={{display:"flex",width:"100%",justifyContent: "space-between"}}>
                                <div style={{width:"30%",fontWeight:"bold",}}><span>&#x20b9;</span>12,800</div>
                                    <div style={{width:"70%",color:"#008B8B",fontWeight:"bold"}}><span>&#x20b9;</span>850 Cashback</div>
                                </div>
                                <div style={{color:"#606060"}}>Invoice ID:345674323456</div>
                                <div style={{color:"#606060"}}>Cashback is valid for 30 days</div>
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"0.5rem" }}>
                            <div style={{width:"20%" ,display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{fontWeight:"bold",backgroundColor:"lightpink",border: "1px ", borderRadius: "12px",fontSize:"12px",padding:"15px",width:"60px"}}>
                            <div style={{fontSize:"25px"}}>25</div>
                            <div>NOV</div>
                            </div>
                            </div>
                            <div style={{width:"80%", paddingLeft:"10px"}}>
                                <div style={{display:"flex",width:"100%",justifyContent: "space-between"}}>
                                <div style={{width:"30%",fontWeight:"bold"}}><span>&#x20b9;</span>12,800</div>
                                    <div style={{width:"70%",fontWeight:"bold"}}>Intrest: <span>&#x20b9;</span>850</div>
                                </div>
                                <div style={{color:"#606060"}}>Invoice ID:345674323456</div>
                                <div style={{color:"#FF69B4"}}>Overdue 2 days ago</div>
                            </div>
                        </div>


                </div>

                </div>

                <div>
                    <hr></hr>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{margin:"3px",color:"blue" ,display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  width: "25%" }}>
                        <div style={{ alignItems: "center" }}><i class="fa-solid fa-house"></i>
                        </div>
                        <div>Home</div>

                    </div>

                    <div style={{color:"grey",margin:"3px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "25%" }}>
                        <div style={{ alignItems: "center" }}><i class="fa-solid fa-id-card"></i>
                        </div>
                        <div>Leads</div>

                    </div>

                    <div style={{ color:"grey",margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  width: "25%" }}>
                        <div style={{ alignItems: "center" }}><i class="fa-solid fa-square-poll-horizontal"></i>
                        </div>
                        Report

                    </div>

                    <div style={{ color:"grey",margin:"3px",display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",  width: "25%" }}>
                    <div><i class="fa-solid fa-shop"></i></div>
                        <div>Catalog</div>
                        </div>
                </div>
                </div>
            

        </div>
    )
}


export default Mobile;