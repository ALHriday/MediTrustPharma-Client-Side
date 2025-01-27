

const Accordion = () => {
    return (
        <div className="py-6 px-4 flex flex-col gap-2">
            <h1 className="text-4xl font-bold my-6">Frequently Ask Questions (FAQ).</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">What is MediTrustPharma?</div>
                <div className="collapse-content">
                    <p>MediTrustPharma is an online platform providing a wide range of genuine medicines, healthcare products, and wellness essentials delivered to your doorstep.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How can I place an order?</div>
                <div className="collapse-content">
                    <p>Simply browse through our products, add items to your cart, upload a prescription (if required), and proceed to checkout.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Who can become a seller on MediTrustPharma?</div>
                <div className="collapse-content">
                    <p>Anyone meeting our eligibility requirements can register as a seller, including licensed pharmacies and authorized distributors.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What are the seller requirements?</div>
                <div className="collapse-content">
                    <p>Sellers must provide proof of licensing, meet our quality standards, and agree to our platform policies.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> Are the medicines genuine?</div>
                <div className="collapse-content">
                    <p>Yes, we only source products from certified manufacturers and verified sellers to ensure authenticity.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;