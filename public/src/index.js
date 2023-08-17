import '../../node_modules/preline/dist/preline';

(function SetActiveRouteClass() {
  const inActiveClass = 'text-gray-300';
  const activeClass = 'text-emerald-500';

  const routeMap = new Map([
    ['/', 'home-nav-link'],
    ['/course', 'course'],
    ['/about', 'about'],
    ['/ressources', 'ressources'],
  ]);

  let activeRoute = window.location.pathname;

  var activeId = routeMap.get(activeRoute);

  document.querySelector(`#${activeId}`).classList.remove(inActiveClass);
  document.querySelector(`#${activeId}`).classList.add(activeClass);
})();
