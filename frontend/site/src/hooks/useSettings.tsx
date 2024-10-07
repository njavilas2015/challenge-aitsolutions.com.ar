import useData from "@hooks/useData"

import useStore from '@store/index'
import useStep from '@store/step'

const useSettings = () => {

    const url: string = useStore(state => state.url)

    const setPage = useStep(state => state.setPage)

    const setUrl = useStore(state => state.setUrl)

    const setIsOnline = useStore(state => state.setIsOnline)

    const setInit = useStore(state => state.setInit)

    const { check } = useData()

    const handleServer = (value: string) => {

        if (value.length > 0) {

            setUrl(`${new URL(url).protocol}//${value}:${new URL(url).port}/api`)

            setInit(false)

            setIsOnline(false)
        }
    }

    const handlePort = (value: number) => {

        if (value > 0) {

            setUrl(`${new URL(url).protocol}//${new URL(url).hostname}:${value}/api`)

            setInit(false)

            setIsOnline(false)
        }
    }

    const handleCheck = async () => {

        try {

            await check()

            setTimeout(() => setPage('app'), 3000);

        } catch (error) {

        }
    }

    const getHostName = () => new URL(url).hostname

    const getPort = () => new URL(url).port

    const getUrl = () => `${new URL(url).protocol}//${new URL(url).hostname}:${new URL(url).port}/api`

    return {
        url,
        handleCheck,
        handlePort,
        handleServer,
        getHostName,
        getUrl,
        getPort
    }
}

export default useSettings