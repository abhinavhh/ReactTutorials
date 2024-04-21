function GenList(props) {
    const{list, loadingUI, emptylistUI, children } = props;
    if(!list){
            return loadingUI||<>LOADING...</>;
    }
    else if (list.length === 0) {
        return emptylistUI||<>LOADING....</>;
    }
    else
    {
        return(
            <>
                {children}
            </>
        )
    }
}
GenList.deaultProps = {
    loadingUI:null,
    emptylistUI:null,
};
export default GenList;