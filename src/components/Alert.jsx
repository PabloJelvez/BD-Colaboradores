const Alert = ({children, color}) => {
    return (
        <>
    <div className={`alert alert-${color} my-3`}>{children}</div>
    </>
    );
};
export default Alert;