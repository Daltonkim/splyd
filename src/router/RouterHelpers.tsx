import * as utils from '../utils/utils';
const localStorageLastLocationKey = "lastLocation";
const localStorageUserKey = 'user';
const localStorageUseProfilerKey = 'userProfile';

function acceptLocation(lastLocation) {
  if (
    lastLocation &&
    lastLocation.pathname &&
    lastLocation.pathname !== "/" &&
    lastLocation.pathname.indexOf("auth") === -1 &&
    lastLocation.pathname !== "/logout" &&
    lastLocation.pathname !== "/logged-out"
  ) {
    return true;
  }

  return false;
}

export function saveLastLocation(lastLocation) {
  const localStorateLocations = utils.getStorage(localStorageLastLocationKey);
  let _useLocations = localStorateLocations
    ? JSON.parse(localStorateLocations)
    : [];

  if (acceptLocation(lastLocation)) {
    _useLocations.push(lastLocation.pathname);
    utils.setStorage(
      localStorageLastLocationKey,
      JSON.stringify(_useLocations),
      120
    );
  }
}

export function forgetLastLocation() {
  utils.removeStorage(localStorageLastLocationKey);
}

export function getUser() {
  const store = localStorage.getItem(localStorageUserKey);
  const user = store ? JSON.parse(store) : {};
  return user;
}

export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function forgetUser() {
  utils.removeStorage(localStorageUserKey);
  localStorage.removeItem('persist:OAuth');
}

export function getUserProfile() {
  const store = localStorage.getItem(localStorageUseProfilerKey);
  const userProfile = store ? JSON.parse(store) : {};
  return userProfile;
}

export function setUserProfile(user) {
  localStorage.setItem(localStorageUseProfilerKey, JSON.stringify(user));
}

export function forgetUserProfile() {
  utils.removeStorage(localStorageUseProfilerKey);
}

export function getLastLocation() {
  const localStorateLocations = utils.getStorage(localStorageLastLocationKey);
  if (!localStorateLocations) {
    return "/";
  }

  const _userLocations = JSON.parse(localStorateLocations);
  const result = _userLocations.length > 0 ? _userLocations.pop() : "/";
  return result;
}
