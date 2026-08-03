const SubTitle = ({ subt, desc, className = "" }) => {
    return (
        <section className="m-5">

            <div className={`text-center py-4 ${className}`}>
            <h1 className="text-3xl font-bold">{subt}</h1>
            {desc && <p>{desc}</p>}
        </div>

        </section>
    );
};

export default SubTitle;
