import {render, screen} from "@testing-library/react";
import WatchList from "./WatchList";
import {Provider} from "react-redux";
import {store} from "../../redux/store";


describe('WatchList component', () => {
    it('Header renders', () => {

        expect(screen.getByText('Stock list')).toBeInTheDocument();
    })
})