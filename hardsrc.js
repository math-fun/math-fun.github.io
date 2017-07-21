b1 = 1;
		b2 = 1;
		b3 = 1;
		b4 = 1;
		b5 = 1;
		p = 1;
		m = 1;
		i = 1;
		score=0;
		count = 0;
		right="check";
		left="check";
		signs="+";
		function start()
		{
		st();
		window.setInterval(counter, 1000);
		go.disabled=true;
		}
		function counter()
		{
			var c=parseInt(time.innerHTML);
			c--;
			time.innerHTML=c+"s";
			if(c==0)
			{
				alert("Thank you for playing!\nyour score is "+score);
				window.location.assign("index.html")
			}
		}
		function st()
		{
			n1.value="";
			n2.value="";
			n3.value="";
			n4.value="";
			n5.value="";
			right="check";
		left="check";
		signs="+";
			b1 = 1;
		b2 = 1;
		b3 = 1;
		b4 = 1;
		b5 = 1;
		p = 1;
		m = 1;
		i = 1
		count=0;
			var temp;
			//window.alert("Loooooooooool");
			result=Math.ceil((Math.random()*100));
			//window.alert(result);
			s=(Math.ceil(Math.random()*4));
			switch(s)
			{
				case 1:
					sign="+";
					//alert("in switch");
					break;
				case 2:
					sign="*";
					//alert("in switch");
					break;
				case 3:
					sign="-";
					//alert("in switch");
					break;
				default:
					sign="+";
					//alert("in switch");
			}
			o1=Math.ceil(Math.random()*100);
			if(sign=="+")
			{
				temp=result-o1;
			}
			if(sign=="*")
			{
				
				num1 = Math.ceil((Math.random()*99));
				do
				{
					num2 = Math.ceil((Math.random()*99));

				}
				while(num1*num2 >=200);
				result = num1*num2;
				temp = num1;
				o1 = num2;
			}
			if(sign=="-")
			{
				temp=result+o1;
			}
			selbtn1 = Math.ceil(Math.random()*5);
			selbtn2 = Math.ceil(Math.random()*5);
			while(selbtn1==selbtn2)
			{
				selbtn1 = Math.ceil(Math.random()*5);
				selbtn2 = Math.ceil(Math.random()*5);
			}
			if(selbtn1==1)
			{
				n1.value = temp;				
			}
			else if(selbtn1==2)
			{
				n2.value = temp;
			}
			else if(selbtn1==3)
			{
				n3.value = temp;
			}
			else if(selbtn1==4)
			{
				n4.value = temp;
			}
			else if(selbtn1==5)
			{
				n5.value = temp;
			}


			if(selbtn2==1)
			{
				n1.value = o1;
			}
			else if(selbtn2==2)
			{
				n2.value = o1;
			}
			else if(selbtn2==3)
			{
				n3.value = o1;
			}
			else if(selbtn2==4)
			{
				n4.value = o1;
			}
			else if(selbtn2==5)
			{
				n5.value = o1;
			}

			if(n1.value=="")
			{
				n1.value = Math.ceil(Math.random()*100);
			}
			if(n2.value=="")
			{
				n2.value = Math.ceil(Math.random()*100);
			}
			if(n3.value=="")
			{
				n3.value = Math.ceil(Math.random()*100);
			}
			if(n4.value=="")
			{
				n4.value = Math.ceil(Math.random()*100);
			}
			if(n5.value=="")
			{
				n5.value = Math.ceil(Math.random()*100);
			}
			go.value=result;
			n1.className="btn btn-success btn-circle";
			n2.className="btn btn-success btn-circle";
			n3.className="btn btn-success btn-circle";
			n4.className="btn btn-success btn-circle";
			n5.className="btn btn-success btn-circle";
			sm.className="btn btn-success btn-circles";
			si.className="btn btn-success btn-circles";
			sp.className="btn btn-success btn-circles";
			n1.disabled=false;
			n2.disabled=false;
			n3.disabled=false;
			n4.disabled=false;
			n5.disabled=false;
			sp.disabled=false;
			sm.disabled=false;
			si.disabled=false;
		}
		function fal()
		{
			if(b1==1&&count==0)
			{
				n1.className="btn btn-success btn-circle  ani1";
				b1++;
				count++;
				left=n1;
				if(n2==right||n3==right||n4==right||n5==right)disable();
				validate();
			}
			else if(b1==1&&count==1)
			{
				n1.className="btn btn-success btn-circle  ani1p";
				b1++;
				right=n1;
				disable();
				validate();
			}
			else
			{
				b1--;
				if(n1!=right)
				{
					count=0;
					n1.className="btn btn-success btn-circle  ani12";
				}
				else
				{
					n1.className="btn btn-success btn-circle  ani12r	";
					if((b5==2||b2==2||b3==2||b4==2))
						{count=1;right="check";}
					else 
						{count=0;
						right="check";}
				}
				enable();
			}
			
		}
		function fal2()
		{
			if(b2==1&&count==0)
			{
				n2.className="btn btn-success btn-circle  ani2";
				b2++;
				count++;
				left=n2;
				if(n1==right||n3==right||n4==right||n5==right)disable();
				validate();
			}
			else if(b2==1&&count==1)
			{
				n2.className="btn btn-success btn-circle  ani2p";
				b2++;
				right=n2;
				disable();
				validate();
			}
			else
			{
				
				b2--;
				if(n2!=right)
				{
					count=0;
					n2.className="btn btn-success btn-circle  ani22";
				}
				else
				{
					if((b1==2||b5==2||b3==2||b4==2)){count=1;right="check";}
					else {count=0;right="check";}
					n2.className="btn btn-success btn-circle  ani22r";
				}
				enable();
			}
		}
		function fal3()
		{
			if(b3==1&&count==0)
			{
				n3.className="btn btn-success btn-circle  ani3";
				b3++;
				count++;
				left=n3;
				if(n1==right||n2==right||n4==right||n5==right)disable();
				validate();
				
			}
			else if(b3==1&&count==1)
			{
				n3.className="btn btn-success btn-circle  ani3p";
				b3++;
				right=n3;
				disable();
				validate();
			}
			else
			{
				
				b3--;
				if(n3!=right)
				{
				count=0;
				n3.className="btn btn-success btn-circle  ani32";
				}
				else
				{
					n3.className="btn btn-success btn-circle  ani32r";
					if((b1==2||b2==2||b5==2||b4==2)){count=1;right="check";}
					else {count=0;right="check";}
				}
				enable();
			}
		}
		function fal4()
		{
			if(b4==1&&count==0)
			{
				n4.className="btn btn-success btn-circle  ani4";
				b4++;
				count++;
				left=n4;
				if(n1==right||n2==right||n3==right||n5==right)disable();
				validate();
			}
			else if(b4==1&&count==1)
			{
				n4.className="btn btn-success btn-circle  ani4p";
				b4++;
				right=n4;
				disable();
				validate();
			}
			else
			{
				
				b4--;
				if(n4!=right)
				{
				count=0;
				n4.className="btn btn-success btn-circle  ani42";
				}
				else
				{
					n4.className="btn btn-success btn-circle  ani42r";
					if((b1==2||b2==2||b3==2||b5==2)){count=1;right="check";}
					else {count=0;right="check";}
				}
				enable();
			}
		}
		function fal5()
		{
			if(b5==1&&count==0)
			{
				n5.className="btn btn-success btn-circle ani5";
				b5++;
				count++;
				left=n5;
				if(n1==right||n2==right||n3==right||n4==right)disable();
				validate();
			}
			else if(b5==1&&count==1)
			{
				n5.className="btn btn-success btn-circle  ani5p";
				b5++;
				right=n5;
				disable();
				validate();
			}
			else
			{
				b5--;
				if(n5!=right)
				{
					count=0;
					n5.className="btn btn-success btn-circle  ani52";
				}
				else
				{
					n5.className="btn btn-success btn-circle  ani52r";
					if((b1==2||b2==2||b3==2||b4==2)){count=1;right="check";}
					else{ count=0;right="check";}
				}
				enable();
			}
		}
		function left1()
		{
			if(p==1)
			{
				sp.className="btn btn-success btn-circles left1";
				p++;
				sm.disabled=true;
				si.disabled=true;
				signs=sp;
				validate();
			}
			else
			{
				sp.className="btn btn-success btn-circles right1";
				p--;
				signs="+";
				sm.disabled=false;
				si.disabled=false;
			}
		}
		function left2()
		{
			if(m==1)
			{
				sm.className="btn btn-success btn-circles left2";
				m++;
				signs=sm;
				sp.disabled=true;
				si.disabled=true;
				validate();
			}
			else
			{
				sm.className="btn btn-success btn-circles right2";
				m--;
				signs="+";
				sp.disabled=false;
				si.disabled=false;
			}
		}
		function left3()
		{
			if(i==1)
			{
				si.className="btn btn-success btn-circles left3";
				i++;
				sm.disabled=true;
				sp.disabled=true;
				signs=si;
				validate();
			}
			else
			{
				si.className="btn btn-success btn-circles right3";
				signs="+";
				i--;
				sm.disabled=false;
				sp.disabled=false;
			}
		}
		function disable()
		{
			if(b1==1)n1.disabled=true;
			if(b2==1)n2.disabled=true;
			if(b3==1)n3.disabled=true;
			if(b4==1)n4.disabled=true;
			if(b5==1)n5.disabled=true;
		}
		function enable()
		{
			n1.disabled=false;
			n2.disabled=false;
			n3.disabled=false;
			n4.disabled=false;
			n5.disabled=false;
		}
		function validate()
		{
			var a=0,b=0,c=0;
			if(right!="check"&&left!="check"&&signs!="+")
			{
				a=parseInt(right.value);
				b=parseInt(left.value);
				if(signs.value=="+")
				{
				c=b+a;
				
				}
				else if(signs.value=="-")
				{
				c=b-a;
				}
				else
				{
				c=a*b;
				}
				if(c==result)
				{
				score=score+1;
				alert("Good One!");
				scr.innerHTML="Score : "+score;
				st();
				}
				else
				{
				Materialize.toast('try again', 4000);
				}
			}
		}