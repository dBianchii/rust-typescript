use crate::shapes::{area::Area, circle::Circle, rect::Rect};
mod shapes;



fn main() {
    let rect = Rect::default();

    let circ = Circle {
        x: 0.0,
        y: 0.0,
        radius: 10.0,
    };


    println!("{}", rect.area());
}
