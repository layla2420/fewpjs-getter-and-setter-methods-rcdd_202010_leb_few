// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius
  }
  get Diameter(){
    return this.radius*2
  }
  get Circumference(){
    return Math.pi*this.Diameter
  }
  get Area(){
  return  Math.pi*(this.Radius**2)
  }
  set Diameter(radius){
    this.Diametre=this.Radius*2
  }
  set Circumference(radius){
    this.Circumference=Math.pi*this.Diameter
  }
  set Area(radius){
    this.diametre=Math.pi*(this.Radius**2)
}
