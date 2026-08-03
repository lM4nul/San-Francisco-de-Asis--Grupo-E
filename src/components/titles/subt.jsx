const SubTitle = ({ subt, desc, className = "" }) => {
    return (
        <section className="m-5">

            <div className={`text-center py-4 ${className}`}>
            <h2 className="text-3xl font-bold">{subt}</h2>
            {desc && <p>{desc}</p>}
        </div>

        </section>
    );
};

export default SubTitle;
