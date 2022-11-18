export const CreatePost = () => {
    return (
        <form className="auth">
            <h3>Create Post</h3>
            <label htmlFor="imageUrl"></label>
            <input type="file" placeholder="Image" id="imageUrl" name="imageUrl" />
            <label htmlFor="description"></label>
            <textarea type="text" placeholder="Description" id="description" name="description" />           
            <button type="submit">Create</button>
        </form>
    );
}