const usePageTitle = () => {
    const setPageTitle = (title: string) => {
       return  document.title = title;
    }
    const getPageTitle = () => {
        return document.title;
    }

    return {setPageTitle, getPageTitle}
}

export default usePageTitle;