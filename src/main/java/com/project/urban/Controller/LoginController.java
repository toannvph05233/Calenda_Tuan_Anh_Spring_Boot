package com.project.urban.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String viewLogin() {
        return "signin";
    }

    @GetMapping("/")
    public String viewLogin1() {
        return "signin";
    }

    @GetMapping("/home")
    public String viewHome() {
        return "home";
    }

    @GetMapping("/tabbar")
    public String viewTabbar() {
        return "tabbar";
    }

    @GetMapping("/tabbarAdmin")
    public String viewtabbarAdmin() {
        return "tabbarAdmin";
    }

    @GetMapping("/search")
    public String viewsearch() {
        return "search";
    }

    @GetMapping("/resetpassword")
    public String viewResetpassword() {
        return "resetpassword";
    }

    @GetMapping("/listUser")
    public String viewlistUser() {
        return "indexcrud";
    }

    @GetMapping("/changepassword")
    public String viewchangepassword() {
        return "changepassword";
    }

    @GetMapping("/demohome")
    public String viewdemohome() {
        return "demohome";
    }
}
