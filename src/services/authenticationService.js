export  const login = async (type, email, password) => {
    console.log("email ",email);
    console.log("password ",password);
    console.log("type ",type);
    const url = `http://localhost:8080/api/${type}/login`;
    console.log("url "+url);
    try {
        const inputdata={email,password};
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputdata)
            }
        );
        const data = await response.json();
        console.log(data);
        alert(`${type} Login Successful`);
    } catch (error) {
        console.log(`Error in ${type} login :`, error);

    }
}