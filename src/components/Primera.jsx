function Primera() {
    return(        
            <div class="login-box">
                <form class='form'>
                    <h1 id='title-form'>Login</h1>
                    <label for="username">Nombre</label>
                    <input type="text" placeholder="Ingresar Nombre"/>

                    <label for="password">Email</label>
                    <input type="email" placeholder="Ingresar Email"/>

                    <input type={"submit"} value="Ingresar"/>
                </form>

            </div>
        )
}

export default Primera;