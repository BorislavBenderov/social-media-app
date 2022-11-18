export const Register = () => {
    return (
        <form className='auth'>
            <h3>Register Here</h3>
            <label htmlFor="email"></label>
            <input type="text" placeholder="Email" id="email" name="email" />
            <label htmlFor="password"></label>
            <input type="password" placeholder="Password" id="password" name="password" />
            <label htmlFor="repeatPassword"></label>
            <input type="password" placeholder="Repeat Password" id="repeatPassword" name="repeatPassword" />
            <label htmlFor="imageUrl"></label>
            <input type="file" placeholder="Choose a file" id="imageUrl" name="imageUrl"/>
            <button type="submit">Register</button>
        </form>
    );
}