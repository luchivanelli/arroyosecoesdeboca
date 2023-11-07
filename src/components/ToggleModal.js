const ToggleModal = (refModal, img, title) => {
    if (title == null) {
        refModal.current.children[0].classList.add('hidden')
    } else {
        refModal.current.children[0].classList.remove('hidden')
        refModal.current.children[0].innerHTML = title
    }
    refModal.current.children[1].src = img
    refModal.current.classList.toggle('hidden')
}

export default ToggleModal
