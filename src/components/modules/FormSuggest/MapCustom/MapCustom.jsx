import './MapCustom.scss'
import BGmap from '../../../../Assets/map.jpg'

const MapCustom = () => {
    return (
        <div className="bg-map">
            {/* <img src={BGmap} alt="Backroun Map" /> */}
            <div className="item-location">
                <div className="location item-1">
                    <h1>Item 1</h1>
                </div>
                <div className="location item-2">
                    <h1>Item 2</h1>
                </div>
                <div className="location item-3">
                    <h1>Item 3</h1>
                </div>
                <div className="location item-4">
                    <h1>Item 4</h1>
                </div>
                <div className="location item-5">
                    <h1>Item 5</h1>
                </div>
            </div>
        </div>
    );
}

export default MapCustom