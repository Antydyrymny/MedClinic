import logo48px from '/src/assets/Pictogram/logo48px.png';
import PageWrapperCss from './LoginPageWrapperComponent.module.css';

function LoginPageWrapperComponent({ children }) {
    return (
        <div className={PageWrapperCss.wrapper}>
            <div className={PageWrapperCss.container}>
                <div className={PageWrapperCss.content}>
                    <div className={PageWrapperCss.logo}>
                        <img src={logo48px} alt={'Fullstack Clinic'} />
                    </div>
                    <h4 className={PageWrapperCss.heading}>Fullstack Clinic</h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
                    fugiat. Neque officia possimus repellendus, accusamus vero impedit
                    dolores odio, quas dolor vel molestias voluptates similique quibusdam
                    nostrum a blanditiis eos, ipsum placeat sit velit rem voluptatibus.
                    Quaerat atque quos nesciunt perspiciatis necessitatibus! Unde
                    inventore, cumque ex esse nesciunt odio! Ipsa deserunt iusto sed
                    quaerat atque exercitationem, soluta asperiores corrupti consequuntur
                    aliquid veniam laborum explicabo velit. Nostrum modi numquam,
                    voluptatum eaque, deleniti molestiae quam et ea aspernatur culpa,
                    dignissimos unde eos. Beatae voluptatum, consequatur ipsa laborum
                    excepturi repudiandae dolores? Rem voluptatibus adipisci ab aut
                    corrupti, ratione laudantium totam veritatis commodi pariatur?
                </div>
            </div>
        </div>
    );
}

export default LoginPageWrapperComponent;
