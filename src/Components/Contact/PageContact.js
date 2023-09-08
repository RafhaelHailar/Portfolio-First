const PageContact = () => {
    return (
        <>
            <div id="contact">
                <h1 className="title">contact</h1>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button>Send Your Message</button>
                </form>
            </div>
        </>
    );
}

export default PageContact;