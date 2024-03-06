const PageModel = ({className,children}) => {
    return (
        <main className={`${className} rounded-lg h-full shadow-3d px-3`}>
            {children}
        </main>
    );
}

export default PageModel;