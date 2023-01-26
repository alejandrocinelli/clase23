import cookieParser from "cookie-parser";

const set = (req, res) => {
    res.cookie("server", "express").json({ succes: "true" });
}

const setEx = (req, res) => {
    res.cookie("server2", "express",{maxAge:10000 } ).json({ succes: "true" });
}

const getCookies = (req, res) => {
    res.json({
        set : req.cookies.server,
        setEx : req.cookies.server2, 
        signed : req.signedCookies.signed
    });
}

const clearSet = (req, res) => {
    res.clearCookie("server").json({ succes: "true" });
}

const setSigned = (req, res) => {
    res.cookie("signed", "coockie", { signed: true }).json({ succes: "true" })
}

export const setController = { set, setEx , getCookies , clearSet ,setSigned };