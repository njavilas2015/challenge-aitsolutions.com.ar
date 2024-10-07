import useStore, { IRaw } from '@store/index'

const useData = () => {

    const url: string = useStore(state => state.url)

    const select = useStore(state => state.select)

    const setResetSelected = useStore(state => state.setResetSelected)

    const setData = useStore(state => state.setData)

    const setIsOnline = useStore(state => state.setIsOnline)

    const setInit = useStore(state => state.setInit)

    async function pull() {

        const response: Response = await fetch(`${url}/article/`, {
            method: 'get'
        })

        const payload: IRaw[] = await response.json()

        setData(payload)
    }

    async function create(value: IRaw) {

        await fetch(`${url}/article/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })

        await pull()
    }

    async function update(value: IRaw) {

        await fetch(`${url}/article/${value.id}/`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })

        await pull()
    }

    async function destroy() {

        for (const x of select) {

            await fetch(`${url}/article/${x}/`, { method: 'delete' })
        }

        await pull()

        setResetSelected()
    }

    async function check() {

        try {

            await pull()

            setIsOnline(true)

        } catch (error) {

            setIsOnline(false)

            throw error
        }

        finally {

            setInit(true)
        }
    }

    async function upload(file: File | null, fileName: string) {

        if (!file) return;

        const formData: FormData = new FormData();

        formData.append('file', file, fileName);

        try {

            const response: Response = await fetch(`${url}/backup/`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Failed to upload file: ${response.statusText}`);
            }

            console.log('File uploaded successfully');

            await pull()

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    async function download() {

        const link: HTMLAnchorElement = document.createElement('a');

        link.href = `${url}/backup`

        link.download = "data.xlsx";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    return {
        pull,
        destroy,
        check,
        upload,
        download,
        create,
        update,
    }
}

export default useData