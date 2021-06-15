import { createSelector } from 'reselect';

export const getAppState = createSelector(
  [state => state.app],
  appState => appState
);

export const getAppData = createSelector(
  [getAppState],
  appState => appState.data
);

export const getFactorA = createSelector(
  [getAppState],
  appState => Number(appState.factorA)
);

export const getUserDataByID = createSelector(
  [
    getAppData,
    (state, ID) => ID
  ],
  (appData, id) => appData[id]
);

export const getUserAttitudeBehaviorByID = createSelector(
  [getUserDataByID],
  userData => userData.attitudeBehavior
);

export const getUserNameByID = createSelector(
  [getUserDataByID],
  userData => {
    try {
      return `${userData.firstName} ${userData.secondName}`
    } catch(e) {
      return null
    }
  }
);
