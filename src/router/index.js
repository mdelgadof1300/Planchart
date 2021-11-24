import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

/* info de la base en la consola */
var firebaseConfig = {
  apiKey: "AIzaSyDwdmQvEsHEjLO2BmAb7iOnNAm4Fidi1Yk",
  authDomain: "udemy-api-556f0.firebaseapp.com",
  databaseURL: "https://udemy-api-556f0-default-rtdb.firebaseio.com",
  projectId: "udemy-api-556f0",
  storageBucket: "udemy-api-556f0.appspot.com",
  messagingSenderId: "989968827674",
  appId: "1:989968827674:web:1188dd8b7e8b6ae84c58a3",
};

// conexión a firebase
initializeApp(firebaseConfig);

const auth = getAuth();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/registro",
    name: "Registro",
    component: () => import("../views/Registro.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/dashboarduser",
    name: "DashboardUser",
    component: () => import("../views/DashboardUser.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/perfil",
    name: "Perfil",
    component: () => import("../views/Perfil.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/salir") {
    signOut(auth);
    next({
      path: "/",
    });
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    onAuthStateChanged(auth, async (user) => {
      if (user == null) {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
