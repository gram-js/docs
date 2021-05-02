const tabSections = document.querySelectorAll('.tabs');

tabSections.forEach(section => {
    const tabs = Array.from(section.querySelectorAll('.tab'));
    const selectedTab = tabs[0].dataset.title;
    const titleSection = document.createElement('div');

    section.dataset.selectedTab = selectedTab;

    tabs.forEach(tab => {
        if (tab.dataset.title !== selectedTab) {
            tab.classList.add('hidden');
        }
    });

    titleSection.classList.add('tabs-title');
    titleSection.append(
        ...tabs.map(tab => {
            const button = document.createElement('button');
            button.classList.add('tab-title-button');
            button.textContent = tab.dataset.title;
            button.dataset.title = tab.dataset.title;
            return button;
        }),
    );

    section.insertBefore(titleSection, tabs[0]);
});

document.body.addEventListener('click', event => {
    const { target } = event;

    if (target.closest('.tab-title-button')) {
        const { title } = target.dataset;
        if (!title) {
            return;
        }

        const { parentElement } = target.parentElement;
        if (!parentElement.classList.contains('tabs')) {
            return;
        }

        const tabs = Array.from(parentElement.querySelectorAll('.tab'));

        tabs.forEach(tab => {
            tab.classList.toggle('hidden', tab.dataset.title !== title);
        });
    }
});
