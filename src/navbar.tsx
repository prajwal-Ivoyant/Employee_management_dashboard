import './navbarStyles.css';


export default function Navbar(){
    return (
         <nav>
        <div className="logo">
            <div className="symbol">
                <span>
                PJ18.ai
            </span>
            </div>
            <p>This is replica of claude.ai prop drilling demo page</p>
        </div>

        <div className="options">
            <div className='ExOptions'>A</div>
            <div className='ExOptions'>B</div>
            <div className='ExOptions'>C</div>
            <div className='ExOptions'>D</div>
            <div className='ExOptions'>E</div>
        </div>

    </nav>
    );

   
}