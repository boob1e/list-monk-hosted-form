export default function SignUp() {
    return (
        <form
            method="post"
            action="http://82.153.138.43:9000/subscription/form"
            className="listmonk-form"
        >
            <div>
                <h3>Subscribe</h3>
                <input type="hidden" name="nonce" />

                <p>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail"
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name (optional)"
                    />
                </p>

                <p>
                    <input
                        id="6c15c"
                        type="checkbox"
                        name="l"
                        checked
                        value="6c15c74e-df04-4a52-a322-047bfe7f9ce1"
                    />
                    {/* <label for="6c15c">test list 2</label> */}
                </p>

                <input type="submit" value="Subscribe " />
            </div>
        </form>
    );
}
