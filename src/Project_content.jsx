const Project_con =(props)=>{
        return(
            <>
                <h1>Content top</h1>
                {props.children}
                {/* children is a keyword so dont need to pass as parameter */}
                <h2>Content Bottom</h2>
                {props.copyright}
            </>
        );
};
export default Project_con;