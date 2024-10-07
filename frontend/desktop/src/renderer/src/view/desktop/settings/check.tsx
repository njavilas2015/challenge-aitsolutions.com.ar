import CardV3 from "@components/card-v3"
import useStore from '@store/index'

const App = (): JSX.Element => {

    const isInit: boolean = useStore(state => state.isInit)

    const isOnline: boolean = useStore(state => state.isOnline)

    return (
        <>
            {isInit && <CardV3 isOnline={isOnline} />}
        </>
    )
}

export default App