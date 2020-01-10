//Implementaion Array
class CreateArray{
  constructor(){
    this.Lenght = 0;
    this.Data = {};
  }
  get(index){
    return this.Data[index];
  }
  push(index){
    const Item = this.Data[this.Lenght] = index
    this.Lenght ++;
    return Item;
  }
  pop(){
    const Item = this.Data[this.Lenght -1]
    delete this.Data[this.Lenght -1];
    this.Lenght --;
    return Item;
  }
  Delete(index){
    const item = this.Data[this.Lenght-1]
    this.Drop(index);
    return item;
  }
  Drop(index){
      for(let i = index ;i<this.Lenght -1;i++){
        this.Data[i]=this.Data[i+1]
      }
    delete this.Data[this.Lenght -1];
    this.Lenght --;
  }
}
