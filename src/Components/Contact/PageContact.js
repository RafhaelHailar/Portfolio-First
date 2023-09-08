const PageContact = () => {
    return (
        <>
            <div id="contact">
                <div className="title">
                    <span></span>
                    <div className="name">
                        contact
                        <svg xmlns="http://www.w3.org/2000/svg" width="416" height="96" viewBox="0 0 416 96" fill="none">
                            <path d="M414.383 3.18575C413.138 -0.133717 394.835 4.96016 393.249 5.26713C375.935 8.61818 358.43 11.9598 341.801 17.9155C318.383 26.3031 295.793 34.5422 273.223 45.1869C253.708 54.3903 234.436 62.85 213.717 68.9359C197.2 73.7874 181.56 77.3689 164.297 77.1013C142.101 76.7572 120.483 74.3905 98.4404 72.2448C81.1512 70.5617 63.6285 70.5213 46.8863 75.5536C31.3391 80.2267 16.4856 86.7461 2.27008 94.4461" stroke="#F0C5BC" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span></span>
                </div>
                <form>
                    <h1>Let's get to know each other</h1>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message" rows={10}></textarea>
                    <button>Send Your Message</button>
                </form>
            </div>
        </>
    );
}

export default PageContact;