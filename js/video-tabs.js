document.addEventListener('DOMContentLoaded', () => {

    const tabs = () => {
        const head = document.querySelector('.tabs__head')
        const body = document.querySelector('.tabs__body')

        const getActiveTabName = () => {
            return head.querySelector('.tabs__caption_active').dataset.tab
        }

        const setActiveContent = () => {
            if (body.querySelector('.tabs__content_active')) {
                body.querySelector('.tabs__content_active').classList.remove('tabs__content_active')
            }
            body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('tabs__content_active')
        }


        if (!head.querySelector('.tabs__caption_active')) {
            head.querySelector('.tabs__caption').classList.add('tabs__caption_active')
        }

        setActiveContent(getActiveTabName())

        head.addEventListener('click', e => {
            const caption = e.target.closest('.tabs__caption')
            if (!caption) return
            if (caption.classList.contains('tabs__caption_active')) return

            if (head.querySelector('.tabs__caption_active')) {
                head.querySelector('.tabs__caption_active').classList.remove('tabs__caption_active')
            }

            caption.classList.add('tabs__caption_active')

            setActiveContent(getActiveTabName())
        })
    }
    tabs()
});