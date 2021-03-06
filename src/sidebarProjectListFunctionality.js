import { menubuttons } from './homeButtonsFunctions'
import { loadProjectsTasks } from './taskLoader'

let selectedProject = ''
function sidebarProjectFunctionality() {
    document.querySelectorAll('.project').forEach((project) =>
        project.addEventListener('click', (e) => {
            highlightProject(e)
            displayProjectTasks(e)
            updateContentTitle(e)
            updateSelectedProject(e)
            loadProjectsTasks()
        })
    )
}

function highlightProject(e) {
    document
        .querySelectorAll('.project')
        .forEach((project) => project.classList.remove('active'))
    menubuttons.forEach((button) => button.classList.remove('active'))
    e.currentTarget.classList.add('active')
}
function displayProjectTasks() {
    const addTaskButton = document.querySelector('.add-task')
    addTaskButton.classList.remove('hidden')
}
function updateContentTitle(e) {
    document.querySelector('.content-title').textContent =
        e.currentTarget.textContent
}
function updateSelectedProject(e) {
    selectedProject = e.currentTarget.dataset.id
    console.log('selected project is ' + selectedProject)
}

export { sidebarProjectFunctionality, selectedProject }
